export const cardGen = (name, age, stuClass, subjects = []) => {

  let sub = "";
  subjects?.forEach((ele) => {
    sub += `<p>${ele}</p>`;
  });

  return `<div class="card">
    <h1 class="name">${name}</h1>
    <div class="infor">
      <p>age is : ${age}</p>
      <p>class is : ${stuClass}</p>
    </div>
    <h3>Subjects</h3>
    <div class="subjects">
      ${sub}
    </div>
  </div>`;

};
