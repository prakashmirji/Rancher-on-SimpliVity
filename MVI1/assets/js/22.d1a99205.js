(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{336:function(e,n,t){"use strict";t.r(n);var a=t(33),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sample-vars-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-vars-file"}},[e._v("#")]),e._v(" Sample vars file")]),e._v(" "),t("p",[e._v("A sample "),t("code",[e._v("vars.yml")]),e._v(" file is provided named "),t("code",[e._v("group_vars/all/vars.yml.sample")]),e._v(" that you can use as a model for your own\nvars file. To create a "),t("code",[e._v("vars.yml")]),e._v(" file, you create a new file called "),t("code",[e._v("group_vars/all/vars.yml")]),e._v(" and add entries based on\nthe descriptions in the preceding sections. A sample "),t("code",[e._v("vars.yml")]),e._v(" file is shown below for convenience.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("---\n\nrancher_subnet: 10.15.152.0/24                            # subnet to use on the 'vm_portgroup' VLAN\ngateway: '10.15.152.1'                                    # gateway for the above subnet (see your net admin)\nntp_servers: ['10.12.2.1']                                # List of NTP servers\ndns_servers: ['10.10.173.1','10.10.173.31']               # list of DNS servers\ndns_suffixes: ['am2.cloudra.local','hpe.org']             # list of DNS suffixes\n\n#\n# DHCP related settings\n#\ndhcp_subnet: 10.15.152.0/24                               # subnet to use on the above VLAN (see your net admin)\ndhcp_range: '10.15.152.100 10.15.152.150'                 # DHCP range to use on the above VLAN (see your net admin)\ndhcp_default_lease_time: 86400                            # DHCP default lease time (24 hours)\ndhcp_max_lease_time: 2592000                              # DHCP maximum lease time (30 days)\ndomain_name: hpe.org                                      # DNS domain name\nsupport_template: hpe-ubuntu-tpl                          # Name of VM template used for Support Node running DHCP\n\n#\n# vcenter related settings\n#\nvcenter_hostname: vcentergen10.am2.cloudra.local          # name of your vCenter server\nvcenter_username: Administrator@vsphere.local             # Admin user for your vCenter environment\nvcenter_password: \"{{ vault_vcenter_password }}\"          # Encrypted in group_vars/all/vault.yml\nvcenter_validate_certs: false                             # true not implemented/tested\nvcenter_cluster: Rancher                                  # Name of your SimpliVity Cluster (must exist)\nvm_dvswitch: dvsMgmt2960                                  # Distributed Virtual Switch containing vm_portgroup (must exist)\nvm_portgroup: hpe2964                                     # portgroup that the VMS connect to (must exist)\ndatacenter: DEVOPS                                        # Name of your DATACENTER (must exist)\ndatastore: hpeRancher                                     # Datastore where the VMs are landed\ndatastore_size: 1024                                      # size in GiB of the VM datastore, only applies if the playbook creates the datastore\ncluster_name: hpe                                         # Name of the K8S Cluster. A VM folder with the same name is created if needed\n\n#\n# folders, templates and OVAs, templates are created using the corresponding OVA if they cannot be found (and only if they cannot be found)\n#\nuser_folder: hpe                                          # folder and pool name for the user cluster VMs, created if they are not found\nadmin_folder: hpeRancher                                  # Folder and pool name for Rancher Cluster VMs and  Templates\nadmin_template: hpe-ubuntu-tpl\n#admin_template: hpe-centos-tpl\n\n#\n# Public key to use for login in the rancher nodes (the VM hosting the Rancher Cluster)\n#\nssh_key: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDUAPiKRsniRNFeAsbwxY1/dfAG6Bhhsc+Z45j3Cn+K6rQ06L8sVvCCVglzL0uXjhAoVwaapMDSpYNTUOy4ukvSq99Cil97UdKQxV9nPkhghjFGMt3XIHeddX994F0Ma5W/6Y/fKWOuPRsoV+3bj4LmAK634ISmEAEYdh4mbczSsLTDTQcafREnzTJGAlx4GqFiHr1isK+CWLEFcJGbjbULgtJGGkprfMX/UZS0LNV5QYGiiw5/jkQQZ6jl7aKJwaRT/4jlW8Jbg4YbPddUnicxOeVDmU2lpi42S4lBxJC5f9VH8S9NzdcX43R5dleRjKdtEbMRFhsBlx7vkvRJ2upx core@hpe-ansible'\n\n#\n# CSI Storage plugin\n#\ncsi_datastore_name: hpecsi\ncsi_storageclass_name: csivols\ncsi_datastore_size: 20\n\n\n#\n# SimpliVity\n#\nsimplivity_validate_certs: false\nsimplivity_appliances:\n- 10.10.173.116\n- 10.10.173.117\n- 10.10.173.118\n\n\nproxy:\n  http:  \"http://10.12.7.21:8080/\"     #  http:  \"http://user:password@10.12.7.21:8080/\"\n  https:  \"http://10.12.7.21:8080/\"\n  except: \"localhost,.am2.cloudra.local,.hpe.org\"\n\n\nrancher:\n  url: https://lb1.hpe.org        # this the FQDN at which Rancher Server can be reached\n  hostname: lb1.hpe.org           # generally same fqdn as the one in the url above but not necessarily\n  validate_certs: False           #\n  apiversion: v3                  # Playbooks designed for v3 of the API\n  engineInstallURL: 'https://releases.rancher.com/install-docker/19.03.sh'    # All node templates use the same version of Docker\n\nuser_cluster:\n# vm_template: hpe-ubuntu-tpl     # an existing VM template, the admin template by default\n  name: api                       # name of the user cluster\n  csi: false                      # true to be done\n  vcenter_credsname: mycreds2     # only one vCenter cluster supported at this time\n  pools:\n   - name: master-pool\n     etcd: true\n     master: true\n     worker: false\n     count: 1\n     hostPrefix: hpe-mas\n     node_template:\n       name: master-node\n       cpu_count: 2\n       disk_size: 20000\n       memory_size: 8192\n   - name: worker-pool\n     etcd: false\n     master: false\n     worker: true\n     count: 2\n     hostPrefix: hpe-wrk\n     node_template:\n       name: worker-node\n       cpu_count: 2\n       disk_size: 40000\n       memory_size: 4096\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);