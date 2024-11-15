import React,{useState} from 'react'



const MyTabComponent = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div className="tabs">
        {/* Render buttons for each child */}
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeTab;
          return (
            <>
              <button
                className={`btn ${isActive ? 'btn-active' : ''}`}
                onClick={() => handleTabClick(index)}
                disabled={isActive}
              >
                {child.props.title}
              </button>
              {isActive && (
                <div className="view">
                  {child}
                </div>
              )}
            </>
          );
        })}
      </div>
    );
  };
  

export default MyTabComponent
