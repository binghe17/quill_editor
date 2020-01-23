// Import the format
import { Video } from './quill-video-resize.js'
// require("quill-video-resize.css");


// register with Quill
// Quill.register({ 'formats/video': Video });

// Build the editor
  quill = new Quill('#editor-container', {
    modules: {
      syntax: true,
      toolbar: '#toolbar-container'
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  });

// You must add the editor to the root element after the editor was created and before the video embed!
// quill.root.quill = quill;

// Embed the video into the editor:
let src = 'https://www.youtube.com/embed/o-KdQiObAGM'
quill.insertEmbed(index, 'video', src, 'user');