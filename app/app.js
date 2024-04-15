console.log( 'app.js chargé' );

const app = {
    elBtnClear: document.getElementById( 'clear-btn' ),
    elPostItsContainer: document.getElementById( 'post-its-w' ),
    elCreateForm: null,
    elInputFormTitle: null,
    elInputFormContent: null,
    arrPostItDatas: []
};

/**
 * Démarrage de l'application
 */
function appInit() {
    console.log( 'Application démarrée' );

    // TODO: Reconstitution des Post-Its enregistrés
    // Temporaire:


    // Ajout des post-its à l'affichage
    for( let postIt of app.arrPostItDatas ) {
        const elPostIt = postItGetDOM( postIt );
        app.elPostItsContainer.append( elPostIt );
    }

    // Création du formulaire
    appCreateFormDOM();

    // Injection du formulaire
    app.elPostItsContainer.append( app.elCreateForm );
}

/**
 * Fabrique le formulaire d'ajout d'un Post-It
 */
function appCreateFormDOM() {
    /*
        <div id="create-form" class="post-it">
            <div class="content">
                <div class="title">Ajouter un Post-It</div>
                <input type="text" id="form-title" placeholder="Titre">
                <textarea id="form-content" placeholder="Message"></textarea>
                <div class="btn btn-success" id="form-save">Enregistrer</div>
            </div>
        </div>
    */

    // Préparation du Post-It contenant le formulaire
    app.elCreateForm = document.createElement( 'div' );
    app.elCreateForm.classList.add( 'post-it' );
    app.elCreateForm.id = 'create-form';

    // Préparation du contenu de elCreateForm
    let htmlContent =   '<div class="content">';
    htmlContent +=          '<div class="title">Ajouter un Post-It</div>';
    htmlContent +=          '<input type="text" id="form-title" placeholder="Titre">';
    htmlContent +=          '<textarea id="form-content" placeholder="Message"></textarea>';
    htmlContent +=          '<div class="btn btn-success" id="form-save">Enregistrer</div>';
    htmlContent +=      '</div>';

    // Injection du contenu dans elCreateForm
    app.elCreateForm.innerHTML = htmlContent;


    app.elInputFormTitle = app.elCreateForm.querySelector('#form-title')
    app.elTextFormContent = app.elCreateForm.querySelector('#form-content')

    // Gestion du bouton d'enregistrement
    const elBtnNewPostIt = app.elCreateForm.querySelector( '#form-save' );
    elBtnNewPostIt.addEventListener( 'click', appHandlerNewPostIt );
    
}

/**
 * Gestionnaire de l'enregistrement d'un nouveau Post-It
 */
function appHandlerNewPostIt( ) {
    console.log( 'cliqué' );

const newPostIt = Object.create(modelPostIt);

let hasError = false;

hasError = isUserInputValid(app.elInputFormTitle, /.+/)
hasError = isUserInputValid(app.elTextFormContent, /.+/)

let newTitle = app.elInputFormTitle.value.trim();
let newContent = app.elTextFormContent.value.trim();

if(hasError){
    app.elInputFormTitle.classList.add('error')
    hasError = true 
    return
}

if(hasError){
    app.elTextFormContent.classList.add('error');
    hasError = true 
    return
}

if(hasError){
    return;
}

console.log(newPostIt)
}