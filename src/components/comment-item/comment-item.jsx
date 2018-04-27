import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './comment-item.css'

export default class CommentItem extends React.Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        removeComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    removeItem = () => {
        const {index, comment, removeComment} = this.props;
        //接收父级组件说明要删除的评论
        if(window.confirm(`确认删除${comment.name}的评论吗?`)){
            removeComment(index)
        }
    }
    render() {
        const {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                <a href="javascript:;" onClick={this.removeItem}>删除</a>
                </div>
                <p className="user"><span>{comment.name}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}