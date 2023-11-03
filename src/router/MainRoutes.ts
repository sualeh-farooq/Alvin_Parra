const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'Default',
      path: '/dashboard/default',
      component: () => import('@/views/dashboards/default/index.vue')
    },
    {
      name: 'Analytics',
      path: '/dashboard/analytics',
      component: () => import('@/views/dashboards/analytics/index.vue')
    },
    {
      name: 'Starter',
      path: '/starter',
      component: () => import('@/views/StarterPage.vue')
    },
    {
      name: 'Statistics',
      path: '/widget/statistics',
      component: () => import('@/views/widgets/statistics/index.vue')
    },
    {
      name: 'Data',
      path: '/widget/data',
      component: () => import('@/views/widgets/data/index.vue')
    },
    {
      name: 'Chart',
      path: '/widget/chart',
      component: () => import('@/views/widgets/chart/index.vue')
    },
    {
      name: 'TextField',
      path: '/components/textfield',
      component: () => import('@/views/forms/components/VTextField.vue')
    },
    {
      name: 'Buttons',
      path: '/components/buttons',
      component: () => import('@/views/forms/components/VButtons.vue')
    },
    {
      name: 'Autocomplete',
      path: '/components/autocomplete',
      component: () => import('@/views/forms/components/VAutocomplete.vue')
    },
    {
      name: 'Checkbox',
      path: '/components/checkbox',
      component: () => import('@/views/forms/components/VCheckbox.vue')
    },
    {
      name: 'Radio',
      path: '/components/radio',
      component: () => import('@/views/forms/components/VRadio.vue')
    },
    {
      name: 'Slider',
      path: '/components/slider',
      component: () => import('@/views/forms/components/VSlider.vue')
    },
    {
      name: 'Switch',
      path: '/components/switch',
      component: () => import('@/views/forms/components/VSwitch.vue')
    },
    {
      name: 'Editor',
      path: '/forms/plugins/editor',
      component: () => import('@/views/forms/plugins/editor/Editor.vue')
    },
    {
      name: 'Captcha',
      path: '/forms/plugins/captcha',
      component: () => import('@/views/forms/plugins/captcha/Captcha.vue')
    },
    {
      name: 'Mask',
      path: '/forms/plugins/mask',
      component: () => import('@/views/forms/plugins/mask/Mask.vue')
    },
    {
      name: 'Clipboard',
      path: '/forms/plugins/clipboard',
      component: () => import('@/views/forms/plugins/clipboard/Clipboard.vue')
    },
    {
      name: 'Toltip',
      path: '/forms/plugins/tooltip',
      component: () => import('@/views/forms/plugins/tooltip/Tooltip.vue')
    },
    {
      name: 'Modal',
      path: '/forms/plugins/modal',
      component: () => import('@/views/forms/plugins/modal/Dialog.vue')
    },
    {
      name: 'Org Chart',
      path: '/forms/charts/orgchart',
      component: () => import('@/views/forms/charts/orgChart/Orgchart.vue')
    },
    {
      name: 'ApexChart',
      path: '/forms/charts/apexchart',
      component: () => import('@/views/forms/charts/apex-chart/ApexChart.vue')
    },
    {
      name: 'Layouts',
      path: '/forms/layouts/layouts',
      component: () => import('@/views/forms/layouts/Layouts.vue')
    },
    {
      name: 'MultiColumnForms',
      path: '/forms/layouts/multi-column-forms',
      component: () => import('@/views/forms/layouts/MultiColumnForms.vue')
    },
    {
      name: 'ActionBar',
      path: '/forms/layouts/action-bar',
      component: () => import('@/views/forms/layouts/ActionBar.vue')
    },
    {
      name: 'StickyActionBar',
      path: '/forms/layouts/sticky-action-bar',
      component: () => import('@/views/forms/layouts/StickyActionBar.vue')
    },
    {
      name: 'TableBasic',
      path: '/tables/tbl-basic',
      component: () => import('@/views/forms/tables/TableBasic.vue')
    },
    {
      name: 'TableDark',
      path: '/tables/tbl-dark',
      component: () => import('@/views/forms/tables/TableDark.vue')
    },
    {
      name: 'TableDensity',
      path: '/tables/tbl-density',
      component: () => import('@/views/forms/tables/TableDensity.vue')
    },
    {
      name: 'TableHeight',
      path: '/tables/tbl-height',
      component: () => import('@/views/forms/tables/TableHeight.vue')
    },
    {
      name: 'TableFixedHeader',
      path: '/tables/tbl-fixed-header',
      component: () => import('@/views/forms/tables/TableHeaderFixed.vue')
    },
    {
      name: 'Form Validation',
      path: '/forms/formvalidation',
      component: () => import('@/views/forms/FormValidation.vue')
    },
    {
      name: 'Form Wizard',
      path: '/forms/formwizard',
      component: () => import('@/views/forms/formWizard/FormWizard.vue')
    },
    {
      name: 'Avatar',
      path: '/basic/avatar',
      component: () => import('@/views/ui-elements/basic/UiAvatar.vue')
    },
    {
      name: 'Badges',
      path: '/basic/badges',
      component: () => import('@/views/ui-elements/basic/UiBadges.vue')
    },
    {
      name: 'Breadcrumb',
      path: '/basic/breadcrumb',
      component: () => import('@/views/ui-elements/basic/UiBreadcrumb.vue')
    },
    {
      name: 'Chip',
      path: '/basic/chip',
      component: () => import('@/views/ui-elements/basic/UiChip.vue')
    },
    {
      name: 'UI List',
      path: '/basic/uilist',
      component: () => import('@/views/ui-elements/basic/UiList.vue')
    },
    {
      name: 'ExpansionPanel',
      path: '/basic/expansion-panel',
      component: () => import('@/views/ui-elements/basic/UiExpansionPanel.vue')
    },
    {
      name: 'Cards',
      path: '/basic/cards',
      component: () => import('@/views/ui-elements/basic/UiCards.vue')
    },
    {
      name: 'Tabs',
      path: '/basic/tabs',
      component: () => import('@/views/ui-elements/basic/UiTabs.vue')
    },
    {
      name: 'Alert',
      path: '/advance/alert',
      component: () => import('@/views/ui-elements/advance/UiAlert.vue')
    },
    {
      name: 'Pagination',
      path: '/advance/pagination',
      component: () => import('@/views/ui-elements/advance/UiPagination.vue')
    },
    {
      name: 'Progress',
      path: '/advance/progress',
      component: () => import('@/views/ui-elements/advance/UiProgress.vue')
    },
    {
      name: 'Ratings',
      path: '/advance/ratings',
      component: () => import('@/views/ui-elements/advance/UiRatings.vue')
    },
    {
      name: 'Snackbar',
      path: '/advance/snackbar',
      component: () => import('@/views/ui-elements/advance/UiSnackbar.vue')
    },
    {
      name: 'Timeline',
      path: '/advance/timeline',
      component: () => import('@/views/ui-elements/advance/UiTimeline.vue')
    },
    {
      name: 'ButtonToggle',
      path: '/advance/btn-toggle',
      component: () => import('@/views/ui-elements/advance/UiButtonToggle.vue')
    },
    {
      name: 'Tabler Icons',
      path: '/icons/tabler',
      component: () => import('@/views/utilities/icons/TablerIcons.vue')
    },
    {
      name: 'Material Icons',
      path: '/icons/material',
      component: () => import('@/views/utilities/icons/MaterialIcons.vue')
    },
    {
      name: 'Typography',
      path: '/utils/typography',
      component: () => import('@/views/utilities/typography/Typography.vue')
    },
    {
      name: 'Shadows',
      path: '/utils/shadows',
      component: () => import('@/views/utilities/shadows/Shadows.vue')
    },
    {
      name: 'Colors',
      path: '/utils/colors',
      component: () => import('@/views/utilities/colors/Colors.vue')
    },
    {
      name: 'Animation',
      path: '/utils/animation',
      component: () => import('@/views/utilities/animation/Animation.vue')
    },
    {
      name: 'Grid',
      path: '/utils/grid',
      component: () => import('@/views/utilities/grid/Grid.vue')
    },
    {
      name: 'Pricing 1',
      path: '/pages/pricing1',
      component: () => import('@/views/pages/pricing/Pricing1.vue')
    },
    {
      name: 'Pricing 2',
      path: '/pages/pricing2',
      component: () => import('@/views/pages/pricing/Pricing2.vue')
    },
    {
      name: 'Customer',
      path: '/customer/customerlist',
      component: () => import('@/views/apps/customer/Customer.vue')
    },
    {
      name: 'OrderList',
      path: '/customer/orderlist',
      component: () => import('@/views/apps/customer/OrderList.vue')
    },
    {
      name: 'ProductList',
      path: '/customer/productlist',
      component: () => import('@/views/apps/customer/ProductList.vue')
    },
    {
      name: 'ProductReview',
      path: '/customer/productreview',
      component: () => import('@/views/apps/customer/ProductReviews.vue')
    },
    {
      name: 'Create Invoice',
      path: '/app/customer/create-invoice',
      component: () => import('@/views/apps/customer/CreateInvoice.vue')
    },
    {
      name: 'Order Details',
      path: '/app/customer/order-details',
      component: () => import('@/views/apps/customer/order-details/index.vue')
    },
    {
      name: 'Chats',
      path: '/app/chats',
      component: () => import('@/views/apps/chats/Chats.vue')
    },
    {
      name: 'SocialProfile',
      path: '/app/user/social/posts',
      component: () => import('@/views/apps/users/social-profile/Posts.vue')
    },
    {
      name: 'SocialFollowers',
      path: '/app/user/social/followers',
      component: () => import('@/views/apps/users/social-profile/Followers.vue')
    },
    {
      name: 'SocialFriends',
      path: '/app/user/social/friends',
      component: () => import('@/views/apps/users/social-profile/Friends.vue')
    },
    {
      name: 'SocialFriendsRequest',
      path: '/app/user/social/friendsrequest',
      component: () => import('@/views/apps/users/social-profile/FriendRequest.vue')
    },
    {
      name: 'SocialGallery',
      path: '/app/user/social/gallery',
      component: () => import('@/views/apps/users/social-profile/Gallery.vue')
    },
    {
      name: 'Profile 01',
      path: '/app/user/account-profile/profile1',
      component: () => import('@/views/apps/users/account-profile/profile1/index.vue')
    },
    {
      name: 'Profile 02',
      path: '/app/user/account-profile/profile2',
      component: () => import('@/views/apps/users/account-profile/profile2/index.vue')
    },
    {
      name: 'Profile 03',
      path: '/app/user/account-profile/profile3',
      component: () => import('@/views/apps/users/account-profile/profile3/index.vue')
    },
    {
      name: 'Style 01',
      path: '/app/user/card/card1',
      component: () => import('@/views/apps/users/card/CardStyle1.vue')
    },
    {
      name: 'Style 02',
      path: '/app/user/card/card2',
      component: () => import('@/views/apps/users/card/CardStyle2.vue')
    },
    {
      name: 'Style 03',
      path: '/app/user/card/card3',
      component: () => import('@/views/apps/users/card/CardStyle3.vue')
    },
    {
      name: 'List',
      path: '/app/user/list1',
      component: () => import('@/views/apps/users/list/List1.vue')
    },
    {
      name: 'List2',
      path: '/app/user/list2',
      component: () => import('@/views/apps/users/list/List2.vue')
    },
    {
      name: 'Contact List',
      path: '/app/contact/c-list',
      component: () => import('@/views/apps/contacts/List.vue')
    },
    {
      name: 'Contact Card',
      path: '/app/contact/c-card',
      component: () => import('@/views/apps/contacts/Card.vue')
    },
    {
      name: 'Mail',
      path: '/app/mail',
      component: () => import('@/views/apps/mail/Mail.vue')
    },
    {
      name: 'Kanban',
      path: '/app/kanban',
      component: () => import('@/views/apps/kanban/Kanban.vue')
    },
    {
      name: 'Calendar',
      path: '/app/calendar',
      component: () => import('@/views/apps/calendar/Calendar.vue')
    },
    {
      name: 'ecom Products',
      path: '/ecommerce/products',
      component: () => import('@/views/apps/eCommerce/Products.vue')
    },
    {
      name: 'Product detail',
      path: '/ecommerce/product/detail/:id',
      component: () => import('@/views/apps/eCommerce/ProductDetails.vue')
    },
    {
      name: 'Product Checkout',
      path: '/ecommerce/checkout',
      component: () => import('@/views/apps/eCommerce/ProductCheckout.vue')
    },
    {
      name: 'Product Listing',
      path: '/ecommerce/productlist',
      component: () => import('@/views/apps/eCommerce/ProductList.vue')
    },


    /// Main Admin App Routes


    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      component: () => import('@/views/admin/index.vue')
    },
    {
      name: 'Agents ',
      path: '/admin/agents',
      component: () => import('@/views/admin/agents.vue')
    },
    {
      name: 'Pipeline',
      path: '/admin/pipeline',
      component: () => import('@/views/admin/pipeline.vue')
    },
    {
      name: 'Accounts',
      path: '/admin/accounts',
      component: () => import('@/views/admin/accounts.vue')
    },
    {
      name: 'Notes',
      path: '/admin/notes',
      component: () => import('@/views/admin/notes.vue')
    },

    {
      name: 'Approvals',
      path: '/admin/approvals',
      component: () => import('@/views/admin/approvals.vue')
    },
    {
      name: 'Marketings',
      path: '/admin/marketing/',
      component: () => import('@/views/admin/marketing/index.vue')
    },
    {
      name: 'Add Opportunity' ,
      path: '/admin/addOpportunity',
      component: () => import('@/views/admin/addOpportunity.vue')
    },
    {
      name: 'Add Contact' ,
      path: '/admin/addContact',
      component: () => import('@/views/admin/addContact.vue')
    },
    {
      name: 'Admin Contact View' ,
      path: '/admin/contactView',
      component: () => import('@/views/admin/contactView.vue')
    },

    {
      name: 'Settings' , 
      path: '/admin/settings' ,
      component: () => import('@/views/admin/settings.vue')
    },
    {
      name: 'Accounts View' ,
      path: '/admin/accountView' ,
      component: () => import('@/views/admin/accountView.vue')
    },
    {
      name: 'Add Pipeline Page' ,
      path: '/admin/addPipeline',
      component: () =>import('@/views/admin/addPipeline.vue')
    },
    {
      name: 'Agent View Page' ,
      path: '/admin/agentView',
      component: () =>import('@/views/admin/agentView.vue')
    },
    {
      name: 'Campaigns Page' ,
      path: '/admin/campaigns',
      component: () =>import('@/views/admin/campaigns.vue')
    },
    {
      name: 'Opportunity View Page' ,
      path: '/admin/opportunityView',
      component: () =>import('@/views/admin/opportunityView.vue')
    },

    {
      name: 'Forms Page' ,
      path: '/admin/forms',
      component: () =>import('@/views/admin/forms.vue')
    },
    {
      name: 'Accounts View Admin' ,
      path: '/admin/addAccount',
      component: ()=>import('@/views/admin/addAccount.vue')
    },
    {
      name: 'Templates Page' ,
      path: '/admin/template',
      component: () =>import('@/views/admin/template.vue')
    },
    {
      name: 'SMS Page' ,
      path: '/admin/sms',
      component: () =>import('@/views/admin/sms.vue')
    },
    {
      name: 'Email Page' ,
      path: '/admin/email',
      component: () =>import('@/views/admin/email.vue')
    },
    {
      name: 'Contact Admin Page' ,
      path: '/admin/contacts',
      component: () =>import('@/views/admin/contacts.vue')
    },
    {
      name: 'Admin Reports Page' ,
      path: '/admin/reports',
      component: () =>import('@/views/admin/reports.vue')
    },
    {
      name: 'Admin Page Builder' ,
      path: '/admin/page_builder',
      component: () =>import('@/views/admin/page_builder.vue')
    },


    /// Agency App Routes
    {
      name: 'Agency Dashboard',
      path: '/agency/dashboard',
      component: () =>import('@/views/agency/index.vue')
    },
    {
      name: 'Agency Pipeline',
      path: '/agency/pipeline',
      component: () =>import('@/views/agency/pipeline.vue')
    },

    {
      name: 'Agency Add Oppportunity',
      path: '/agency/addOpportunity',
      component: () =>import('@/views/agency/addOpportunity.vue')
    },
    {
      name: 'Agency Contacts',
      path:'/agency/contacts',
      component: () => import('@/views/agency/contacts.vue')
    },
    {
      name: 'Agency Add Contact',
      path: '/agency/addContact',
      component: () =>import('@/views/agency/addContact.vue')
    },

    {
      name: 'Agency View Contact',
      path: '/agency/contactView',
      component: () =>import('@/views/agency/contactView.vue')
    },
    {
      name: 'Agency Add Pipeline',
      path: '/agency/addPipeline',
      component: () =>import('@/views/agency/addPipeline.vue')
    },
    {
      name: 'Agency Notes ',
      path: '/agency/notes',
      component: () =>import('@/views/agency/notes.vue')
    },
    {
      name: 'Agency Agents ',
      path: '/agency/agents',
      component: () =>import('@/views/agency/agents.vue')
    },
    {
      name: 'Agency Agents View ',
      path: '/agency/agentView',
      component: () =>import('@/views/agency/agentView.vue')
    },
    {
      name: 'Agency Settings Page ',
      path: '/agency/settings',
      component: () =>import('@/views/agency/settings.vue')
    },
    {
      name: 'Agent Opp View',
      path:'/agency/opportunityView',
      component: ()=>import('@/views/agency/opportunityView.vue')
    },



    /// Agent App Routes

    {
      name: 'Agent Dashboard',
      path: '/agent/dashboard',
      component: () =>import('@/views/agent/index.vue')
    },
    {
      name: 'Agent Add Opportunity',
      path: '/agent/addOpportunity',
      component: () =>import('@/views/agent/addOpportunity.vue')
    },
    {
      name: 'Agent Pipeline',
      path: '/agent/pipeline',
      component: () =>import('@/views/agent/pipeline.vue')
    },
    {
      name: 'Agent Add Contact',
      path: '/agent/addContact',
      component: () =>import('@/views/agent/addContact.vue')
    },
    {
      name: 'Agent Add Pipeline',
      path: '/agent/addPipeline',
      component: () =>import('@/views/agent/addPipeline.vue')
    },
    {
      name: 'Agents',
      path: '/agent/agents',
      component: () =>import('@/views/agent/agents.vue')
    },
    {
      name: 'Agents Accounts',
      path: '/agent/accounts',
      component : ()=>import('@/views/agent/accounts.vue')
    },
    {
      name: 'Agents Contacts',
      path: '/agent/contacts',
      component : ()=>import('@/views/agent/contacts.vue')
    },
    {
      name: 'Agent Accounts Add' ,
      path: '/agent/addAccount',
      component: ()=>import('@/views/agent/addAccount.vue')
    },
    {
      name: 'Agent Accounts View' ,
      path: '/agent/accountView',
      component: ()=>import('@/views/agent/accountView.vue')
    },

    {
      name: 'Agents View',
      path: '/agent/agentView',
      component: () =>import('@/views/agent/agentView.vue')
    },

    {
      name: 'Agents Contact View',
      path: '/agent/contactView',
      component: () =>import('@/views/agent/contactView.vue')
    },

    {
      name: 'Agents Tasks',
      path: '/agent/tasks',
      component: () =>import('@/views/agent/task.vue')
    },
    {
      name: 'Agents Settings',
      path: '/agent/settings',
      component: () =>import('@/views/agent/settings.vue')
    },
    {
      name: 'Agent Opportunity View',
      path: '/agent/opportunityView',
      component: ()=>import('@/views/agent/opportunityView.vue')
    }




  ]
};

export default MainRoutes;
