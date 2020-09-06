import React from 'react';

//Componente para los datos de el api
const UsersCard = ({name,username,email}) => (

    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {name}
            </h3>
            <h3 className="t5 s-mb-2 s-center">
                {username}
            </h3>
            <h3 className="t5 s-mb-2 s-center">
                {email}
            </h3>
        </div>
    </article>
)

export default UsersCard