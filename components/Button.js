import Image from "next/image";
import rockect from '../public/resources/images/Rocket.svg'

function Button({ className, children, ImgUrl, altText }) {
    return (
        <button className={`${className}`}>
            {children}
            <div className="w-4 h-4 ">
                <Image
                    src={rockect}
                    alt={altText}

                />
            </div>

        </button>

    )
}
export default Button;