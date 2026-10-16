import { Link, useParams } from "react-router-dom";
import blogs from "../data/blogs";

function BlogDetalle() {
  // useParams lee el :id de la URL (/blogs/warframe-noir -> "warframe-noir").
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="container py-5">
        <h1>Noticia no encontrada</h1>
        <p>
          La noticia que buscas no existe. <Link to="/blogs">Volver al blog</Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{blog.encabezado}</h1>
              <span className="breadcrumb">
                <Link to="/">Inicio</Link> &gt; <Link to="/blogs">Blog</Link> &gt; {blog.titulo}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <article>
          {blog.video ? (
            <div className="video-wrapper">
              <iframe
                src={blog.video}
                title={`Video: ${blog.titulo}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img src={blog.imagenDetalle} alt={blog.alt} className="img-fluid mb-4" />
          )}

          <h2 className="mt-4">{blog.tituloArticulo}</h2>
          {blog.parrafos.map((parrafo, indice) => (
            <p key={indice}>{parrafo}</p>
          ))}

          <Link to="/blogs">← Volver al blog</Link>
        </article>
      </div>
    </>
  );
}

export default BlogDetalle;
