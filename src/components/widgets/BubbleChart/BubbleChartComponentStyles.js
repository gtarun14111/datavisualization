

export default function BubbleChartComponentStyle() {
    return (
        <div>
            <svg width={0} height={0}>
            
<defs>
        <filter id="shadow1" x="0" y="0" width="235" height="235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="40"/>
        <feGaussianBlur stdDeviation="40"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.135917 0 0 0 0 0 0 0 0 0 0.970833 0 0 0 0.53 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1567_3697"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1567_3697" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="10" dy="16"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.510417 0 0 0 0 0.0208333 0 0 0 0 1 0 0 0 0.95 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1567_3697"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-20"/>
        <feGaussianBlur stdDeviation="25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.631 0 0 0 0 1 0 0 0 0.37 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1567_3697" result="effect3_innerShadow_1567_3697"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.58 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1567_3697" result="effect4_innerShadow_1567_3697"/>
        </filter>
        <radialGradient id="color1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(132.8 63.4) rotate(110.973) scale(77.1088)">
        <stop stop-color="#838FFF"/>
        <stop offset="1" stop-color="#E3E6FF" stop-opacity="0"/>
        </radialGradient>
        
        <filter id="shadow2" x="0" y="0" width="335" height="395" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="60" dy="120"/>
        <feGaussianBlur stdDeviation="40"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.616667 0 0 0 0 0.794836 0 0 0 0.33 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1567_3675"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1567_3675" result="effect2_dropShadow_1567_3675"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1567_3675" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="10" dy="20"/>
        <feGaussianBlur stdDeviation="50"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.530667 0 0 0 0 0.466667 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_1567_3675"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-20"/>
        <feGaussianBlur stdDeviation="25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.53 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1567_3675" result="effect4_innerShadow_1567_3675"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="15"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.76 0"/>
        <feBlend mode="normal" in2="effect4_innerShadow_1567_3675" result="effect5_innerShadow_1567_3675"/>
        </filter>
        <radialGradient id="color2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(143.2 74.6) rotate(110.973) scale(179.92)">
        <stop stop-color="#FFE3D3"/>
        <stop offset="1" stop-color="#B300B7" stop-opacity="0"/>
        </radialGradient>

        <filter id="shadow3" x="0" y="0" width="247" height="307" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="60" dy="120"/>
        <feGaussianBlur stdDeviation="40"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.704167 0 0 0 0 0.841667 0 0 0 0.33 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1567_3663"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1567_3663" result="effect2_dropShadow_1567_3663"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1567_3663" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="10" dy="20"/>
        <feGaussianBlur stdDeviation="50"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.34425 0 0 0 0 0.2375 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_1567_3663"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-20"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.23 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1567_3663" result="effect4_innerShadow_1567_3663"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.76 0"/>
        <feBlend mode="normal" in2="effect4_innerShadow_1567_3663" result="effect5_innerShadow_1567_3663"/>
        </filter>
        <radialGradient id="color3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(81.248 47.144) rotate(110.973) scale(89.4462)">
        <stop stop-color="#FFE3D3"/>
        <stop offset="1" stop-color="#B300B7" stop-opacity="0"/>
        </radialGradient>

        <filter id="shadow4" x="0" y="0" width="207" height="207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="40"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.135917 0 0 0 0 0 0 0 0 0 0.970833 0 0 0 0.46 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1567_3700"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1567_3700" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="10" dy="16"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.510417 0 0 0 0 0.0208333 0 0 0 0 1 0 0 0 0.95 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1567_3700"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.58 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1567_3700" result="effect3_innerShadow_1567_3700"/>
        </filter>
        <radialGradient id="color4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(113.088 90.664) rotate(110.973) scale(48.3215)">
        <stop stop-color="#3244E8"/>
        <stop offset="1" stop-color="#000210" stop-opacity="0"/>
        </radialGradient>

        <filter id="shadow5" x="0" y="0" width="261" height="321" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="60" dy="120"/>
        <feGaussianBlur stdDeviation="40"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.58025 0 0 0 0 0.0875 0 0 0 0.33 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1567_3672"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1567_3672" result="effect2_dropShadow_1567_3672"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1567_3672" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-20"/>
        <feGaussianBlur stdDeviation="25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.53 0"/>
        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_1567_3672"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="15"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.76 0"/>
        <feBlend mode="normal" in2="effect3_innerShadow_1567_3672" result="effect4_innerShadow_1567_3672"/>
        </filter>
        <radialGradient id="color5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(91.104 51.512) rotate(110.973) scale(103.84)">
        <stop stop-color="#FFB84D"/>
        <stop offset="1" stop-color="#772B00" stop-opacity="0"/>
        </radialGradient>

        <filter id="shadow6" x="0" y="-6" width="70" height="82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="10" dy="16"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.52 0 0 0 0 1 0 0 0 0.95 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1567_3669"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-6"/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.245833 0 0 0 0 0.819 0 0 0 0 1 0 0 0 0.67 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_1567_3669" result="effect2_innerShadow_1567_3669"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.58 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_1567_3669" result="effect3_innerShadow_1567_3669"/>
        </filter>
        <radialGradient id="color6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.24 18.72) rotate(110.973) scale(61.687)">
        <stop stop-color="#6AE4FF"/>
        <stop offset="1" stop-color="#4A93FF" stop-opacity="0"/>
        </radialGradient>    

        </defs>
            </svg>
        </div>
    )
}