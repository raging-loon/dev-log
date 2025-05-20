const ARTICLES_PATH = "html/articles/";
const FILE_DIV = document.getElementById('file-manager');
const FILE_TABLE = document.getElementById('directories');

const new_details_section = (name) => {

    const base_details = document.createElement('details');
    const base_summary = document.createElement('summary');
    base_summary.innerText = name;
    base_details.appendChild(base_summary);


    return base_details;
}

const new_file = (name, base_path, file_path, author, date) => {

    const tr = document.createElement('tr');
    
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
    
    const name_data = document.createElement('td');
    
    name_data.appendChild(span);
    name_data.appendChild(span_2);

    const author_data = document.createElement('td');
    author_data.innerHTML = author;

    const date_data = document.createElement('td');
    date_data.innerHTML = date;


    tr.appendChild(name_data);
    tr.appendChild(author_data);
    tr.appendChild(date_data);

    return tr;

}


const new_table = () => {
    const table = document.createElement('table');

    table.classList = 'table table-sm table-condensed table-borderless'

    const tbody = document.createElement('tbody');

    table.appendChild(tbody);

    return [table, tbody];
}

const build_directory = (name, blob, base_path="") => {
    if(blob.hasOwnProperty("base_path"))
        base_path = blob.base_path;

    const details = new_details_section(name);
    const directory = document.createElement('div');
    directory.classList = 'directory-content';
    const [table, body] = new_table();


    console.log(blob.files)

    blob.files.forEach(file => {
        body.appendChild(new_file(file.name, base_path, file.path, file.author, file.date))
    })
    directory.appendChild(table);
    details.appendChild(directory);

    const tr = document.createElement('tr');
    const td = document.createElement('td');

    td.appendChild(details);
    tr.appendChild(td)

    FILE_TABLE.append(tr);

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

