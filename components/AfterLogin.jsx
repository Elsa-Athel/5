import React,{useState} from 'react';
import { useUser } from '../lib/hooks';

export default function afterLogin() {
    const [errorMsg, setErrorMsg] = useState("");
    const [user]=useUser();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            message: e.currentTarget.message.value,
            name: user.name
        };
        const res = await fetch("/api/message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (res.status === 201) {
            M.toast({html: 'Message sent',classes:'green'})
        } else {
            setErrorMsg(await res.text());
        }
    };
    return (<div className="row">
        <div className="col s12 m12">
            <div className="card-panel horizontal blue ">
                <span className="white-text">Hey you made it here {user?user.name:'Stranger'}, we all were waiting for you.<br/>I hope you like this Authentication module, Its simple yet important to know. 
                I'll be updating it with many new stuff frequently.<br/><br/>Till then you can look around.<strong> Don't forget to drop a message for me.</strong></span>
            </div>
        </div>
        {errorMsg ? (
            <p style={{ color: "teal" }}>{errorMsg}</p>
        ) : null}
        <form className="col s12" onSubmit={handleSubmit}>
            <div className="input-field col s12 m9">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id="message" className="materialize-textarea" name="message" required></textarea>
                <label htmlFor="message">Message for developer</label>
            </div>
            <button className="btn-small waves-effect waves-light blue" type="submit" style={{ marginTop: '1.7rem' }}>Send
    <i className="material-icons right">send</i>
            </button>
        </form>
    </div>)
}