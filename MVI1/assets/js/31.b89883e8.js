(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{426:function(t,e,a){"use strict";a.r(e);var i=a(35),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"active-directory-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active-directory-integration"}},[t._v("#")]),t._v(" Active Directory Integration")]),t._v(" "),a("p",[t._v("Rancher supports multiple methods of authentication, one of which is integrating with Microsoft Active Directory services.")]),t._v(" "),a("h2",{attrs:{id:"configuring-active-directory-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-active-directory-variables"}},[t._v("#")]),t._v(" Configuring Active Directory Variables")]),t._v(" "),a("p",[t._v("All variables relating to Active Directory integration are described in the table below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_ca_file")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The path to you Active Directory CA certificate stored in .pem format. A default ca.pem file is provided in "),a("code",[t._v("playbooks/roles/ad-auth/files/ca.pem")]),t._v(", but this certificate will not work in your environment.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_login_domain")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The Domain name served by your Active Directory service.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_server_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The name of your Active Directory server.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_service_account_username")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The username used to authenticate to your Active Directory service account.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_service_account_password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vault.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password used to authenticate to your Active Directory service account.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_tls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A value of 'true' indicates your Active Directory service requires the use of TLS. A value of 'false' indicates your Active Directory service does not require TLS.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_port")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The port number used to access your Active Directory service.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_group_search_base")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String defining the AD search parameters for Group lookups.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_group_search_filter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String defining the AD search filter used for Group lookups.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_user_search_base")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String defining the AD search parameters for User lookups.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ad_user_search_filter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String defining the AD search filter used for User lookups.")])])])]),t._v(" "),a("p",[t._v("Once these variables are set to the appropriate value, run the "),a("code",[t._v("playbooks/ad-auth.yml")]),t._v(" playbook:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd ~/Rancher-on-SimpliVity\n$ ansible-playbook -i hosts playbooks/ad-auth.yml --vault-password-file .vault_pass\n")])])]),a("h3",{attrs:{id:"active-directory-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active-directory-verification"}},[t._v("#")]),t._v(" Active Directory Verification")]),t._v(" "),a("p",[t._v("Access the Rancher GUI and access the "),a("code",[t._v("Security -> Authentication")]),t._v(" menu option to verify the "),a("code",[t._v("Active Directory")]),t._v(" Authentication method is enabled.")])])}),[],!1,null,null,null);e.default=r.exports}}]);