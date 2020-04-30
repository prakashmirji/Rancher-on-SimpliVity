(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{363:function(e,t,o){"use strict";o.r(t);var r=o(33),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Before you attempt to run the playbooks to deploy the solution, make sure that you have fulfil the requirements:")]),e._v(" "),o("ul",[o("li",[e._v("Configure variables in "),o("code",[e._v("group_vars/all/vars.yml")])]),e._v(" "),o("li",[e._v("Configure sensitive variables in "),o("code",[e._v("group_vars/all/vault.yml")])]),e._v(" "),o("li",[e._v("Configure "),o("code",[e._v("hosts")])]),e._v(" "),o("li",[e._v("Make sure the Rancher URL (specified using the "),o("code",[e._v("rancher.url")]),e._v(" variable) resolves to the IP address of the load balancer you configured in the hosts inventory. Instructions for configuring the DNS are specific to your DNS implementation and are not provided here.")])]),e._v(" "),o("p",[e._v("To assist in setting up the configuration, the solution provides a playbook "),o("code",[e._v("playbooks/pre-checks.yml")]),e._v("\nto perform a pre-deployment validation. This optional playbook is described in the following section.")])])}),[],!1,null,null,null);t.default=i.exports}}]);