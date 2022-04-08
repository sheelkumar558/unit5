import "./category.css"

function Category({image,lebel}){
    return (
        <div className="category">
           <img src={image} alt="" />
           <b>{lebel}</b>
        </div>
    );
}

export {Category};

