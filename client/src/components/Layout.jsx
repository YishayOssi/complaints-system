import React from "react";


export function Layout({ title, children }){
  return (
    <div className="app-container">
      <div className="top-bar">
        <h1>{title}</h1>
      </div>
      
      <main className="content">
        {children}
      </main>
    </div>
  );
};

 