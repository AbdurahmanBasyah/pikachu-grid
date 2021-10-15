import styles from '../styles/Home.module.css'

const Row = ({red, blue, yellow}) => {
    let items = Array.from(Array(40).keys())
    return(
        <div className={styles.gridContainer}>
            {items.map((el, index) => {
                    if (red && red.indexOf(el) > -1) {
                      return (
                        <div className={styles.redBox}></div>
                      )
                    } else if(blue && blue.indexOf(el) > -1) {
                      return (
                        <div className={styles.blueBox}></div>
                      )
                    } else if(yellow && yellow.indexOf(el) > -1){
                        return(
                            <div className={styles.yellowBox}></div>
                        )
                    } else {
                        return(
                            <div className={styles.whiteBox}></div>
                        )
                    }
                }
            )
        }
        </div>
    )
}
export default Row