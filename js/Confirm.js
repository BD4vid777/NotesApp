export default class Confirm {
    static open(options) {
        options = Object.assign({}, {
            title: 'Test Title',
            message: 'Test Body',
            onOk: function () { console.log('Pressed Ok'); }
        }, options);

        const html = `
            <div class="confirm__container">
                <div class="confirm__window">
                    <h3 class="confirm__title">${options.title}</h3>
                    <h2 class="confirm__body">${options.message}</h2>
                    <div class="confirm__buttons">
                        <button class="confirm__yes">Yes</button>
                        <button class="confirm__cancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;

        const template = document.createElement('template');
        template.innerHTML = html;

        // Elements
        const confirmEl = template.content.querySelector(".confirm__container")
        const confirmYes = template.content.querySelector(".confirm__yes")
        const confirmCancel = template.content.querySelector(".confirm__cancel")

        document.body.appendChild(template.content);

        confirmEl.addEventListener('click', e => {
            if (e.target === confirmEl) {
                console.log("Clicked outside the confirm window. CANCELED action")
                confirmEl.classList.add('.confirm__window-close');
                this._close(confirmEl);
            }
        });

        confirmYes.addEventListener('click', () => {
            options.onOk();
            this._close(confirmEl);
        });

        confirmCancel.addEventListener('click', () => {
            console.log("Clicked cancel");
            this._close(confirmEl);
        });
    }

    static  _close(confirmEl) {
        confirmEl.classList.add('confirm__window-close');

        confirmEl.addEventListener('animationend', () => {
            document.body.removeChild(confirmEl);
        });
    }
}
