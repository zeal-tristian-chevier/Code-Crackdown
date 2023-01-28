const MenuButtonSVG = () => {

    return (
        <>
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1" clipPath="url(#clip0_0_1)">
            <rect width="120" height="100" fill="none" />
            <g id="darkGroup">
                <path id="dark1"
                d="M51 48.768C52.3333 49.5378 52.3333 51.4623 51 52.2321L24.75 67.3875C23.4167 68.1573 21.75 67.195 21.75 65.6554L21.75 35.3445C21.75 33.8049 23.4167 32.8427 24.75 33.6125L51 48.768Z"
                fill="rgb(211, 211, 81)" fillOpacity="0.7" />
                <g id="dark2" filter="url(#filter0_d_0_1)">
                <path
                    d="M37 48.768C38.3333 49.5378 38.3333 51.4623 37 52.2321L10.75 67.3875C9.41666 68.1573 7.75 67.195 7.75 65.6554L7.75 35.3445C7.75 33.8049 9.41667 32.8427 10.75 33.6125L37 48.768Z"
                    fill="rgb(0, 200, 60)" fillOpacity="0.7" shapeRendering="crispEdges" />
                </g>
            </g>
            
            <g id="lightGroup">
                <path id="light1"
                d="M37 48.768C38.3333 49.5378 38.3333 51.4623 37 52.2321L10.75 67.3875C9.41666 68.1573 7.75 67.195 7.75 65.6554L7.75 35.3445C7.75 33.8049 9.41667 32.8427 10.75 33.6125L37 48.768Z"
                fill="rgb(211,211,126)" fillOpacity="0.7" />
            </g>
            </g>
            <defs>
            <filter id="filter0_d_0_1" x="3.75" y="33.3416" width="38.25" height="42.3169" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
            </filter>
            <clipPath id="clip0_0_1">
                <rect width="120" height="100" fill="white" />
            </clipPath>
            </defs>
        </svg>    

        </>
    )
}
export default MenuButtonSVG