import { useEffect, useRef } from 'react';

const BottomBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//data527.click/js/responsive.js";
    script.async = true;
    
    if (adRef.current && !adRef.current.querySelector('script')) {
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-4 my-2 overflow-hidden bg-black/20 border-y border-jade/10">
      <div ref={adRef} className="max-w-full">
        <ins 
          className="p5e0143515c"
          style={{ width: '728px', height: '90px', display: 'block' }}
          data-width="728"
          data-height="90"
          data-domain="//data527.click"
          data-affquery="/bf8d1785e8103a9813c3/5e0143515c/?placementName=default"
        >
        </ins>
      </div>
    </div>
  );
};

export default BottomBanner;
