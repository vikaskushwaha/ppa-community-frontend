

export async function CopyToClipBoard(textRef) {

    await navigator.clipboard.writeText(textRef.current.value)
}
