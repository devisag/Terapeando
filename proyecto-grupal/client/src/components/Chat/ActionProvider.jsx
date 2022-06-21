class ActionProvider{
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }
    greet(){
        const greetingMessage = this.createChatBotMessage("Hola, Amigo");
        this.updateChatbotState(greetingMessage);
    }
    //la lista de ls servicios en el chat
    handleServicesList = () => {
        const message = this.createChatBotMessage(
            "Fantastico, Estos sn algunos de nuestros servicios ofrecidos : ",{
                widget:"servicesLinks"
            }
        );
        this.updateChatbotState(message);
    };
    
}
export default ActionProvider