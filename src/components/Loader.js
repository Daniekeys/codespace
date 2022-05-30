import React from 'react'
const Loading  = () => {
    return (
      <>
        <div className="w-full h-auto bg-white">
          <div className="animate-pulse p-10 flex space-x-4">
            <div className="rounded-full bg-[grey] h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-[grey] rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-[grey] rounded col-span-2"></div>
                  <div className="h-2 bg-[grey] rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-[grey] rounded"></div>
              </div>
            </div>
          </div>
          <div className="animate-pulse p-10 flex space-x-4">
            <div className="rounded-full bg-[grey] h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-[grey] rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-[grey] rounded col-span-2"></div>
                  <div className="h-2 bg-[grey] rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-[grey] rounded"></div>
              </div>
            </div>
          </div>
          <div className="animate-pulse p-10 flex space-x-4">
            <div className="rounded-full bg-[grey] h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-[grey] rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-[grey] rounded col-span-2"></div>
                  <div className="h-2 bg-[grey] rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-[grey] rounded"></div>
              </div>
            </div>
          </div>
      
      
        </div>
      </>
    );
}

export default Loading