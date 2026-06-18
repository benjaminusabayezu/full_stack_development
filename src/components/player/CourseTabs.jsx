import React,{useState} from 'react'
import DiscussionTab from './DiscussionTab'
import DownloadTab from './DownloadTab'
import OverviewTab from './OverviewTab'

    const tabs = ["Discussion", "Downloads", "Overview"];

const CourseTabs = () => {
  const [activeTab,setActiveTab]=useState("Downloads");
  const renderTab=()=>{
    switch(activeTab){
        case "Discussion":
            return <DiscussionTab />;
            case "Downloads":
                return <DownloadTab />
                case "Overview":
                    return <OverviewTab />

                    default:
                        return null
    }
  };
  return (
    <section>
        <div className='flex items-center border-b border-zinc-900'>
            {tabs.map((tab)=>{
                return(
                <button key={tab}
                onClick={()=> setActiveTab(tab)}
                className={`px-6 py-4 text-sm transition border-b-2 
                    ${activeTab === tab ? "border-lime-500 text-white" : "border-transparent text-zinc-400 hover:text-white"}`}
                >
           {tab}

                </button>
           ) })}

        </div>
        {renderTab()}
    </section>
  )
}

export default CourseTabs