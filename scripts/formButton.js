/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
action: "https://formspree.io/f/xzbqpgrj",
title: "How can I help you?",
fields: [
    { 
    type: "text", 
    label: "Name:", 
    name: "firstName",
    required: true,
    placeholder: "Jane Appel"
    },
    { 
    type: "email", 
    label: "Email:", 
    name: "email",
    required: true,
    placeholder: "appel@gmail.com"
    },
    {
    type: "textarea",
    label: "Message:",
    name: "message",
    placeholder: "What's on your mind?",
    },
    { type: "submit" }      
],
styles: {
    title: {
    backgroundColor: "gray"
    },
    button: {
    backgroundColor: "#565a5d"
    }
}
});
