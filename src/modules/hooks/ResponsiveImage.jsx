import React from "react";
const ResponsiveImage = ({ imagename, alt }) => {
	return (
		<img
			className="domPhotos"
			src={`assets/images/mobile/${imagename}.jpg`}
			srcSet={`
        assets/images/mobile/${imagename}.jpg 320w,
        assets/images/mobile/${imagename}@2x.jpg 640w,
        assets/images/tablet/${imagename}.jpg 768w,
        assets/images/tablet/${imagename}@2x.jpg 1536w,
        assets/images/desktop/${imagename}.jpg 1024w,
        assets/images/desktop/${imagename}@2x.jpg 2048w
      `}
			sizes="(max-width: 320px) 320px, 
             (max-width: 768px) 768px, 
             (max-width: 1024px) 1024px, 
             2048px"
			alt={alt}
		/>
	);
};
export default ResponsiveImage;
