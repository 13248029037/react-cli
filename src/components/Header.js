import React from 'react'
import { Icon} from 'antd';
import styles from '../less/bread';
import {inject,observer} from 'mobx-react'
 const Bread = inject('Setting')(observer((props) =>{
        return (
            <div className={styles.wrap}  style={{left:props.Setting.getCollaps?'80px':'250px'}}>
                <Icon onClick={props.Setting.setCollaps} className={styles.button} type={props.Setting.getCollaps? 'menu-unfold' : 'menu-fold'}></Icon>
                <div className={styles.showInfo}>
                <Icon className={styles.icon} type="question-circle" theme="outlined" />
                <Icon className={styles.icon} type="user" theme="outlined" />
                <Icon className={styles.icon} type="aliwangwang" theme="outlined" />
                </div>
            </div>
        )
    }
))
export default Bread;
