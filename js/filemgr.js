const ARTICLES_PATH = "html/articles/";
const FILE_DIV = document.getElementById('file-manager');

const new_details_section = (name) => {

    const base_details = document.createElement('details');
    const base_summary = document.createElement('summary');
    base_summary.innerText = name;
    base_details.appendChild(base_summary);


    return base_details;
}

const new_file = (name, base_path, file_path) => {

    const li = document.createElement('li');

    const span = document.createElement('span');

    const image = document.createElement('img');
    image.src="images/file.png";
    image.classList.add('file-icon');

    const link = document.createElement('a');
    link.href = `${ARTICLES_PATH}${base_path}/${file_path}`;
    link.textContent = name;

    const span_2 = document.createElement('span');

    span.appendChild(image);
    span_2.appendChild(link);
    
    li.appendChild(span);
    li.appendChild(span_2);

    return li;

}

const build_directory = (name, blob, base_path="") => {
    if(blob.hasOwnProperty("base_path"))
        base_path = blob.base_path;

    const details = new_details_section(name);
    const directory = document.createElement('div');
    directory.classList = 'directory-content';

    const file_list = document.createElement('ul');

    console.log(blob.files)

    blob.files.forEach(file => {
        file_list.appendChild(new_file(file.name, base_path, file.path))
    })
    directory.appendChild(file_list);
    details.appendChild(directory);

    FILE_DIV.append(details);

}




const build_library = () => {

    fetch('library/library.json')
    .then(response => response.json())
    .then(json => {

        Object.keys(json).forEach(rootDir => {
            build_directory(rootDir, json[rootDir]);
        });
    });
}

