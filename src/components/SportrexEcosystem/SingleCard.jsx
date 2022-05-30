import React,{useState} from 'react'

const styles = {
    parentContainer:"w-4/12 h-auto relative cardContainer overflow-y-hidden",
    initialImg:"w-full h-auto ",
    uploadImg:"img-hover"
}

const SingleCard = ({pic,text}) => {
    const [show, setShow] = useState(false);
    return (
        <div className={styles.parentContainer}
        // onMouseEnter={() => setShow(true)}
        // onMouseLeave={() => setShow(false)}
        style={{width:"24rem"}}
        >
            <div>
                { !show && <img src={pic} className={styles.initialImg} />
                    }
            </div>
            <div>
              { show && <img src={text} className={styles.initialImg} />}
            </div>
        </div>
    )
}


export default SingleCard