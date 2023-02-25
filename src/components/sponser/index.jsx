import css from "./style.module.css";
import star from "../../assets/star.png"
import star3 from "../../assets/star3.png"
const Banner = ({ images, speed = 5000 }) => {
    return (
      <div className={css.inner}>
        <div className={css.wrapper}>
          <section className={css.section11} style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={css.container} key={id}>
                <div className={css.card} style={{background:image.bg}}>
                    <div className={css.avatar}>
                    <img className={css.image} src={image.img} alt="img" />
                    <div className={css.stars}>
                        <img className={css.star} src={star} alt="star"/>
                        <img className={css.star} src={star} alt="star"/>
                        <img className={css.star} src={star3} alt="star3" />
                    </div>
                    </div>
                    <div className={css.contentContainer}>
                    <p className={css.title}>{image.point}-{image.title}</p>
                    <p className={css.content}>
                        {image.text}
                    </p>
                    </div>
                </div>
              </div>
            ))}
          </section>
          <section className={css.section11} style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={css.container} key={id}>
              <div className={css.card} style={{background:image.bg}} >
                  <div className={css.avatar}>
                  <img className={css.image} src={image.img}  alt="img" />
                  <div className={css.stars}>
                        <img className={css.star} src={star} alt="star" />
                        <img className={css.star} src={star} alt="star" />
                        <img className={css.star} src={star3} alt="star3" />
                    </div>
                  </div>
                  <div className={css.contentContainer}>
                  <p className={css.title}>{image.point}-{image.title}</p>
                  <p className={css.content}>
                      {image.text}
                  </p>
                  </div>
              </div>
            </div>
            ))}
          </section>
          <section className={css.section11} style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={css.container} key={id}>
              <div className={css.card} style={{background:image.bg}} >
                  <div className={css.avatar}>
                  <img className={css.image} src={image.img}  alt="img" />
                  <div className={css.stars}>
                        <img className={css.star} src={star} alt="star" />
                        <img className={css.star} src={star} alt="star" />
                        <img className={css.star} src={star3} alt="star3" />
                  </div>
                  </div>
                  <div className={css.contentContainer}>
                  <p className={css.title}>{image.point}-{image.title}</p>
                  <p className={css.content}>
                      {image.text}
                  </p>
                  </div>
              </div>
            </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { Banner };
  