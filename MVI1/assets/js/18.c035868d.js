(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{339:function(t,e,a){"use strict";a.r(e);var l=a(33),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"networking-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networking-configuration"}},[t._v("#")]),t._v(" Networking configuration")]),t._v(" "),a("p",[t._v("The variables used for network configuration include:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("rancher_subnet")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The scope of IP addresses which you can use on the Rancher VLAN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vm_portgroup")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The Rancher VLAN is a vCenter portgroup in your virtual infrastructure which connects all the virtual machines that this solution deploys")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("gateway")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Gateway for the Rancher VLAN. For example, "),a("code",[t._v("'10.15.155.1'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ntp_servers")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("List of NTP servers to be used, in list format. For example, "),a("code",[t._v("['1.2.3.4','0.us.pool.net.org'...]")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("dns_servers")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("List of DNS servers to be used, in list format. For example, "),a("code",[t._v("['10.10.173.1','10.10.173.2'...]")]),a("br"),a("br"),t._v("The DNS services deployed by the solution forwards unresolved requests to these DNS servers.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("dns_suffixes")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("List of DNS suffixes")])])])]),t._v(" "),a("h2",{attrs:{id:"dhcp-related-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dhcp-related-settings"}},[t._v("#")]),t._v(" DHCP related settings")]),t._v(" "),a("p",[t._v("The variables used to configure the DHCP service on a support VM include:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("dhcp_subnet")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Subnet used by the playbooks to create a DHCP range on the above VLAN. For example, "),a("code",[t._v("10.15.155.0/24")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("dhcp_range")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DHCP range to use on the above VLAN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("dhcp_default_lease_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DHCP default lease time. Default is 86400 (24 hours)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("dhcp_max_lease_time")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DHCP maximum lease time. Default is 2592000 (30 days)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("domain_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("DNS domain name for cluster. For example, "),a("code",[t._v("rancher-demo.org")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("support_template")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of VM template used for the support node running DHCP. For example, "),a("code",[t._v("hpe-ubuntu-tpl")])])])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("dhcp_subnet")]),t._v(" variable denotes the subnet where DHCP leases will be provided. This is normally the same subnet as "),a("code",[t._v("rancher_subnet")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("dhcp_range")]),t._v(" variable configures the range of IP addresses that will be given out by the DHCP server. This range needs to include sufficient addresses to satisfy any nodes created using node templates, such as user clusters.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("dhcp_default_lease_time")]),t._v(" and "),a("code",[t._v("dhcp_max_lease_time")]),t._v(" variables specify the minimum and maximum times in seconds for DHCP leases to remain valid. In the provided sample file, the default lease time is 86400 seconds or 24 hours. The maximum lease time is 2592000 seconds, or 30 days. You should use values that will ensure your Kubernetes cluster nodes are not changing IP addresses. You could specify an indefinite lease time but that would likely result in exhausting your "),a("code",[t._v("dhcp_range")]),t._v(" addresses.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("domain_name")]),t._v(" variable denotes the DNS domain name used for the rancher/DHCP subnet.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("support_template")]),t._v(" variable defines the name of the VM template used when deploying the support VM. By default this is set to the same value as the "),a("code",[t._v("admin_template")]),t._v(" variable, which is the template used when creating the VMs in the admin cluster.")]),t._v(" "),a("h2",{attrs:{id:"ssh-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-configuration"}},[t._v("#")]),t._v(" SSH configuration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ssh_key")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("SSH public key for which you have the corresponding SSH private key. Currently the playbooks use the default ID of the user who is running the playbook.  So, the SSH public key to specify here is the one in the file "),a("code",[t._v("~/.ssh/id_rsa.pub")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);