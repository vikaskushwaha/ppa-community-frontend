import Image from "next/image";
import rockect from '../public/resources/images/Rocket.svg'

function Button({ className, children, imageUrl, altText, width, height, signedUp }) {
    return (
        <button className={`${className}`}>
            {children}
            <div className="">
                {signedUp ? <Image
                    src={imageUrl}
                    alt={altText}
                    width={width}
                    height={height}


                /> : null}

            </div>

        </button>

    )
}
export default Button;