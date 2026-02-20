class DevJobsAvatar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }


    createUrl(service,username){
        return `https://unavatar.io/${service}/${username}`
    }

    render() {

        const service = this.getAttribute('service')??'github'
        const username = this.getAttribute('username')??'midudev'
        const size = this.getAttribute('size')??40

        const url = this.createUrl(service,username)

        //con innerHTML uno puede sufrir HTML injection, pero
        // los frameworks ya lo tienen solucionado.
        this.shadowRoot.innerHTML=`
        <style>
            img{
                width: ${size}px;
                height: ${size}px;
                margin-top: 5px;
                position: relative;
                object-fit: cover;
                border-radius: 100%;

                &:hover{
                    outline: 2px solid var(--prymary-dark);
                }
            }
        </style>
        <img
            src = "${url}"
            alt = "Avatar de ${username}"
            class='Avatar'
        />
        `
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define('devjobs-avatar',DevJobsAvatar)