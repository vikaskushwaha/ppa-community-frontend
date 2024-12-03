import Image from "next/image";
import rockect from '../public/resources/images/Rocket.svg'

function Button({ className, children, imageUrl, altText }) {
    return (
        <button className={`${className}`}>
            {children}
            <div className="">
                <Image
                    src={imageUrl}
                    alt={altText}

                />
            </div>

        </button>

    )
}
export default Button;