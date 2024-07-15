import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const data = [
  { itemName: 'Item 1', progress: 75, status: 'PASS', logText: 'Log text for Item 1' },
  { itemName: 'Item 2', progress: 50, status: 'FAIL', logText: 'Log text for Item 2' },
  { itemName: 'Item 3', progress: 100, status: 'PASS', logText: 'Log text for Item 3' },
  // Add more data as needed
];

const Box = ({ itemName, progress, status, logText, onClickLog }) => (
  <div className="box">
    <div className="row">
      <div className="item-name">{itemName}</div>
      <div className="progress">
        <CircularProgress percent={progress} />
      </div>
      <div className={`status ${status.toLowerCase()}`}>{status}</div>
      <div className="log" onClick={() => onClickLog(logText)}>Log</div>
    </div>
  </div>
);

const CircularProgress = ({ percent }) => {
  const strokeWidth = 10; // Adjust as needed
  const radius = 40; // Adjust as needed
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percent / 100) * circumference;

  return (
    <svg className="progress-circle" width={radius * 2} height={radius * 2}>
      <circle
        className="progress-circle-bg"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <circle
        className="progress-circle-progress"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
      />
      <text x={radius} y={radius} className="progress-circle-text">{`${percent}%`}</text>
    </svg>
  );
};

const App = () => {
  const [sidebarContent, setSidebarContent] = useState('');

  const handleLogClick = (text) => {
    setSidebarContent(text);
  };

  return (
    <div className="app">
      <h1>React UI Example</h1>
      <div className="container-group">
        {[1, 2, 3].map((groupIndex) => (
          <div key={groupIndex} className="container">
            {data.map((item, index) => (
              <Box
                key={index}
                itemName={item.itemName}
                progress={item.progress}
                status={item.status}
                logText={item.logText}
                onClickLog={handleLogClick}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={`sidebar ${sidebarContent && 'active'}`}>
        <div className="sidebar-content">
          <div className="sidebar-title">Detail Log</div>
          <div className="close-btn" onClick={() => setSidebarContent('')}>
            &times;
          </div>
          <p>{sidebarContent}</p>
        </div>
      </div>
    </div>
  );
};

export default App;



// import React, { useState } from 'react';
// import './App.css'; // Assuming you have a CSS file for styling

// const data = [
//   { itemName: 'Item 1', progress: 75, status: 'PASS', logText: 'Log text for Item 1' },
//   { itemName: 'Item 2', progress: 50, status: 'FAIL', logText: 'Log text for Item 2' },
//   { itemName: 'Item 3', progress: 100, status: 'PASS', logText: 'Log text for Item 3' },
//   // Add more data as needed
// ];

// const Box = ({ itemName, progress, status, logText, onClickLog }) => (
//   <div className="box">
//     <div className="row">
//       <div className="item-name">{itemName}</div>
//       <div className="progress">
//         <CircularProgress percent={progress} />
//       </div>
//       <div className={`status ${status.toLowerCase()}`}>{status}</div>
//       <div className="log" onClick={() => onClickLog(logText)}>Log</div>
//     </div>
//   </div>
// );

// const CircularProgress = ({ percent }) => {
//   const strokeWidth = 10; // Adjust as needed
//   const radius = 40; // Adjust as needed
//   const circumference = 2 * Math.PI * radius;
//   const progressOffset = circumference - (percent / 100) * circumference;

//   return (
//     <svg className="progress-circle" width={radius * 2} height={radius * 2}>
//       <circle
//         className="progress-circle-bg"
//         cx={radius}
//         cy={radius}
//         r={radius - strokeWidth / 2}
//         strokeWidth={strokeWidth}
//       />
//       <circle
//         className="progress-circle-progress"
//         cx={radius}
//         cy={radius}
//         r={radius - strokeWidth / 2}
//         strokeWidth={strokeWidth}
//         strokeDasharray={circumference}
//         strokeDashoffset={progressOffset}
//       />
//       <text x={radius} y={radius} className="progress-circle-text">{`${percent}%`}</text>
//     </svg>
//   );
// };

// const App = () => {
//   const [sidebarContent, setSidebarContent] = useState('');

//   const handleLogClick = (text) => {
//     setSidebarContent(text);
//   };

//   return (
//     <div className="app">
//       <h1>React UI Example</h1>
//       <div className="container">
//         {data.map((item, index) => (
//           <Box
//             key={index}
//             itemName={item.itemName}
//             progress={item.progress}
//             status={item.status}
//             logText={item.logText}
//             onClickLog={handleLogClick}
//           />
//         ))}
//       </div>
//       <div className="container">
//         {data.map((item, index) => (
//           <Box
//             key={index}
//             itemName={item.itemName}
//             progress={item.progress}
//             status={item.status}
//             logText={item.logText}
//             onClickLog={handleLogClick}
//           />
//         ))}
//       </div>
//       <div className="container">
//         {data.map((item, index) => (
//           <Box
//             key={index}
//             itemName={item.itemName}
//             progress={item.progress}
//             status={item.status}
//             logText={item.logText}
//             onClickLog={handleLogClick}
//           />
//         ))}
//       </div>
//       <div className={`sidebar ${sidebarContent && 'active'}`}>
//         <div className="sidebar-content">
//           <div className="sidebar-title">Detail Log</div>
//           <div className="close-btn" onClick={() => setSidebarContent('')}>
//             &times;
//           </div>
//           <p>{sidebarContent}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
