import { FileText,Download } from "lucide-react"
import { resourceData } from "../../data/resourceData";
const DownloadTab = () => {

  return (
    <div className="space-y-3 p-2">
        <h1 className="font-semibold py-3 mb-4">Downloads</h1>
        {resourceData.map((item)=>(
            <div  key={item.id}
            className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 text-sm">
       <div className="flex items-center gap-3">
        <FileText className="w-3 h-3"/>
        <span>{item.title}</span> 
        <span className="text-sm text-zinc-600">{item.size}</span>

       </div>
       <button>
        <Download className="w-3 h-3"/>
       </button>
            </div>
        ))}
    </div>
  )
}

export default DownloadTab