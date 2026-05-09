import { useState, useCallback } from 'react';

export const useAds = () => {
  const [isShowingRewarded, setIsShowingRewarded] = useState(false);
  const [onRewardedComplete, setOnRewardedComplete] = useState(null);

  const showInterstitial = useCallback(() => {
    console.log('Showing Interstitial Ad...');
    // In a real implementation, you would trigger the Advertica interstitial here
    // For now, we'll simulate a 2-second overlay
  }, []);

  const showRewarded = useCallback((callback) => {
    console.log('Showing Rewarded Ad...');
    setIsShowingRewarded(true);
    setOnRewardedComplete(() => callback);
    
    // Simulate ad watching
    setTimeout(() => {
      setIsShowingRewarded(false);
      if (callback) callback();
    }, 3000);
  }, []);

  return {
    showInterstitial,
    showRewarded,
    isShowingRewarded
  };
};
