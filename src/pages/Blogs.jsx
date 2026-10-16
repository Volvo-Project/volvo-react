import { Link } from "react-router-dom";
import blogs from "../data/blogs";

function Blogs() {
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Blog</h1>
              <span>Comenta y comparte opiniones sobre tus juegos favoritos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={blog.id}>
              <article className="card h-100 shadow-sm">
                <img src={blog.imagen} alt={blog.alt} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h2 className="h4">{blog.titulo}</h2>
                  <p>{blog.resumen}</p>
                  <Link to={`/blogs/${blog.id}`} className="mt-auto">
                    Noticia completa
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
