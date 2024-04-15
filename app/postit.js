console.log( 'postit.js chargé' );

const modelPostIt = {
    title: '',
    content: '',
    createStamp: 0,
    updateStamp: 0
};

/**
 * Retourne un élément DOM représentant un Post-It
 * 
 * @param {object} postItData Données du Post-It sous forme d'objet litéral
 * 
 * @returns L'élément DOM généré
 */
function postItGetDOM( postItData ) {

    /*
    <div class="post-it">
        <div class="commands">
            <div class="btn btn-success hidden" data-cmd="save" data-visible="edit-mode">💾</div>
            <div class="btn" data-cmd="edit" data-visible="view-mode">🖊️</div>
            <div class="btn btn-danger" data-cmd="delete" data-visible="view-mode">🗑️</div>
        </div>
        <div class="content">
            <div class="timestamp create">Creation: Maintenant</div>
            <div class="timestamp update">MàJ: Maintenant</div>
            <div class="title">Hello</div>
            <div class="message">Toto</div>
        </div>
    </div>
    */

    const elPostIt = document.createElement( 'div' );
    elPostIt.classList.add( 'post-it' );

    elPostIt.innerHTML = postItData.title + '<br/>';
    elPostIt.innerHTML += postItData.content + '<br/>';
    elPostIt.innerHTML += postItData.createStamp + '<br/>';
    elPostIt.innerHTML += postItData.updateStamp;
    // TODO: Le code complet du post-it

    return elPostIt;
}