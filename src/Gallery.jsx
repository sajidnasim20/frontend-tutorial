import Common from "./Common";
import gallery from "../public/nature.jpg"

const Gallery = () => {
    return (
      <Common title="Gallery" img={gallery} visited="/about" />
    )
}


export default Gallery;