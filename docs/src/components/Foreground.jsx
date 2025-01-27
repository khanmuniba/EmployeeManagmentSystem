import 'react'
import Cards from './Cards'

function Foreground() {

  const data=[{
    "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, libero.",fileSize:"0.9mb",close:false,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
  },{
    "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, libero.",fileSize:"0.9mb",close:false,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
  },{
    "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, libero.",fileSize:"0.9mb",close:false,tag:{isOpen:false,tagTitle:"upload",tagColor:"green"}
  }];
  return (
    
    <div className='fixed top-0 left-0 z-[3] w-full h-screen bg-purple-800/50 flex flex-wrap gap-10 p-5 '>
      {data.map((item,index)=>(
        <Cards data={item} />
      ))}
      

      </div>
   
  );
}

export default Foreground
