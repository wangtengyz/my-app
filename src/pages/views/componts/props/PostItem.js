import React, { Component } from "react";
import PropTypes from "prop-types";
export default class PostItem extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    handleVote: PropTypes.func.isRequired
    //对象的结构或数组元素的类型是什么样的，依然无从得知。这种情况下，更好的做法是使用
    //PropTypes.shape或PropTypes.arrayOf
    // post: PropTypes.shape({
    //   id: PropTypes.number,
    //   title: PropTypes.string,
    //   author: PropTypes.string,
    //   date: PropTypes.string,
    //   vote: PropTypes.number
    // }).isRequired,
    // 可以指定一个数组由某一类型的元素组成
    // optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // 可以指定一个对象由某一类型的值组成
    // optionalObjectOf: PropTypes.objectOf(PropTypes.number),
    // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
    // 请不要使用 `console.warn` 或抛出异常，因为这在 `onOfType` 中不会起作用。
    // customProp: function(props, propName, componentName) {
    //   if (!/matchme/.test(props[propName])) {
    //     return new Error(
    //       'Invalid prop `' + propName + '` supplied to' +
    //       ' `' + componentName + '`. Validation failed.'
    //     );
    //   }
    // },

    // 你也可以提供一个自定义的 `arrayOf` 或 `objectOf` 验证器。
    // 它应该在验证失败时返回一个 Error 对象。
    // 验证器将验证数组或对象中的每个值。验证器的前两个参数
    // 第一个是数组或对象本身
    // 第二个是他们当前的键。
    // customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    //   if (!/matchme/.test(propValue[key])) {
    //     return new Error(
    //       'Invalid prop `' + propFullName + '` supplied to' +
    //       ' `' + componentName + '`. Validation failed.'
    //     );
    //   }
    // })
  };

  static defaultProps = {
    // 设定默认值后 其实isRequired 作用不大
    post: {},
    handleVote: () => {}
  };

  handleVote = () => {
    const { post } = this.props;
    this.props.handleVote(post.id);
  };

  render() {
    const {
      post: { title, author, date, vote }
    } = this.props;
    const { handleVote } = this;
    return (
      <li>
        <div>{title}</div>
        <div>
          创建人：<span>{author}</span>
        </div>
        <div>
          创建时间：<span>{date}</span>
        </div>
        <div>
          <button onClick={handleVote}>点赞</button>
          &nbsp;
          <span>{vote}</span>
        </div>
      </li>
    );
  }
}

// export default function PostItem(props) {
//   const handleClick = () => {
//     props.onVote(props.post.id);
//   };
//   const { post } = props;
//   return (
//     <li>
//       <div>{post.title}</div>
//       <div>
//         创建人：<span>{post.author}</span>
//       </div>
//       <div>
//         创建时间：<span>{post.date}</span>
//       </div>
//       <div>
//         <button onClick={handleClick}>点赞</button>
//         &nbsp;
//         <span>{post.vote}</span>
//       </div>
//     </li>
//   );
// }
