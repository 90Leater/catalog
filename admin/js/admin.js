window.addEventListener(

'load',

loadProducts

);

async function loadProducts(){

const table =
document.getElementById(
'productTable'
);

table.innerHTML =
`
<tr>

<td colspan="5">

Memuat data...

</td>

</tr>
`;

try{

const snapshot =
await getDocs(

collection(
db,
'products'
)

);

table.innerHTML = '';

let total = 0;

snapshot.forEach(doc=>{

const product =
doc.data();

total++;

table.innerHTML +=

`

<tr>

<td>

${product.id}

</td>

<td>

${product.nama}

</td>

<td>

${product.kategori}

</td>

<td>

${product.active ? 'Aktif':'Nonaktif'}

</td>

<td>

<button
class="editBtn">

Edit

</button>

<button
class="deleteBtn">

Hapus

</button>

</td>

</tr>

`;

});

document
.getElementById(
'totalProducts'
)
.textContent =
total;

}catch(error){

console.error(error);

table.innerHTML =

`
<tr>

<td colspan="5">

Gagal mengambil data.

</td>

</tr>
`;

}

}
