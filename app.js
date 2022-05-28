const editor = document.getElementById('editor')
const cssBoilerplateCopyBtn = document.getElementById('cssBoilerplateCopy')
const fontAwesomeCopyBtn = document.getElementById('fontAwesomeCopy')


// Copy Button Event Listeners
cssBoilerplateCopyBtn.addEventListener('click', function() {
    let range = document.createRange()
    range.selectNode(editor)
    // let editorText = editor.toString()
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
})

fontAwesomeCopyBtn.addEventListener('click', () => {
    const packLink = '<script src="https://kit.fontawesome.com/fc831cd623.js" crossorigin="anonymous"></script>'
    
    packLink.select()
    packLink.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(packLink.value)
})
