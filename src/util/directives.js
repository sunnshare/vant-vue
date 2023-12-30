export default {
  has: {
    inserted(el, bindings, vnode) {
      let value = bindings.value;
      let permissions = vnode.context.$store.state.user.btnPermission;

      if (!permissions.includes(value)) {
        el.parentNode.removeChild(el);
      }
    },
  },
};
