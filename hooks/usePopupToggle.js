const { useState, useEffect } = require("react");

export function usePopupToggle() {
    const [toggle, setToggle] = useState(false);

    function PopupToggle(state) {
        setToggle(state)
        console.log("toggle from", toggle);

        document.body.style.overflow = state ? 'hidden' : 'auto';
    }

    return { setToggle, PopupToggle, toggle };

}

