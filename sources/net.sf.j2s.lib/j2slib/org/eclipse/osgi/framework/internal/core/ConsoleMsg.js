﻿Clazz.declarePackage ("org.eclipse.osgi.framework.internal.core");
Clazz.load (["org.eclipse.osgi.util.NLS"], "org.eclipse.osgi.framework.internal.core.ConsoleMsg", null, function () {
c$ = Clazz.declareType (org.eclipse.osgi.framework.internal.core, "ConsoleMsg", org.eclipse.osgi.util.NLS);
Clazz.defineStatics (c$,
"BUNDLE_NAME", "org.eclipse.osgi.framework.internal.core.ConsoleMessages",
"CONSOLE_LINES_TO_SCROLL_NEGATIVE_ERROR", null,
"CONSOLE_NESTED_EXCEPTION", null,
"CONSOLE_ERROR_READING_RESOURCE", null,
"CONSOLE_RESOURCE_NOT_IN_BUNDLE", null,
"CONSOLE_MORE", null,
"CONSOLE_HELP_CONTROLLING_CONSOLE_HEADING", null,
"CONSOLE_HELP_MORE", null,
"CONSOLE_HELP_DISCONNECT", null,
"CONSOLE_CONFIRM_MORE", null,
"CONSOLE_CONFIRM_DISCONNECT", null,
"CONSOLE_CONFIRM", null,
"CONSOLE_CONFIRM_VALUES", null,
"CONSOLE_Y", null,
"CONSOLE_N", null,
"CONSOLE_PROMPT_DEFAULT", null,
"CONSOLE_INVALID_INPUT", null,
"CONSOLE_TOO_MUCH_INVALID_INPUT", null,
"CONSOLE_MORE_ENTER_LINES", null,
"CONSOLE_HELP_VALID_COMMANDS_HEADER", null,
"CONSOLE_LISTENING_ON_PORT", null,
"CONSOLE_PROMPT", null,
"CONSOLE_TELNET_CONNECTION_REFUSED", null,
"CONSOLE_TELNET_CURRENTLY_USED", null,
"CONSOLE_TELNET_ONE_CLIENT_ONLY", null,
"CONSOLE_UNINSTALLED_MESSAGE", null,
"CONSOLE_INSTALLED_MESSAGE", null,
"CONSOLE_RESOLVED_MESSAGE", null,
"CONSOLE_STARTING_MESSAGE", null,
"CONSOLE_STOPPING_MESSAGE", null,
"CONSOLE_ACTIVE_MESSAGE", null,
"CONSOLE_HELP_CONTROLLING_FRAMEWORK_HEADER", null,
"CONSOLE_HELP_LAUNCH_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_SHUTDOWN_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_CLOSE_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_EXIT_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_GC_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_INIT_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_KEYVALUE_ARGUMENT_DESCRIPTION", null,
"CONSOLE_HELP_SETPROP_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_CONTROLLING_BUNDLES_HEADER", null,
"CONSOLE_HELP_INSTALL_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_UNINSTALL_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_START_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_STOP_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_REFRESH_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_DISPLAYING_STATUS_HEADER", null,
"CONSOLE_HELP_STATUS_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_SS_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_FILTER_ARGUMENT_DESCRIPTION", null,
"CONSOLE_HELP_SERVICES_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_PACKAGES_ARGUMENT_DESCRIPTION", null,
"CONSOLE_HELP_PACKAGES_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_BUNDLES_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_IDLOCATION_ARGUMENT_DESCRIPTION", null,
"CONSOLE_HELP_BUNDLE_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_HEADERS_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_LOG_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_EXTRAS_HEADER", null,
"CONSOLE_HELP_COMMAND_ARGUMENT_DESCRIPTION", null,
"CONSOLE_HELP_EXEC_COMMAND_DESCRIPTION", null,
"CONSOLE_HELP_FORK_COMMAND_DESCRIPTION", null,
"STARTLEVEL_HELP_HEADING", null,
"CONSOLE_HELP_OPTIONAL_IDLOCATION_ARGUMENT_DESCRIPTION", null,
"STARTLEVEL_HELP_SL", null,
"STARTLEVEL_ARGUMENT_DESCRIPTION", null,
"STARTLEVEL_HELP_SETFWSL", null,
"STARTLEVEL_IDLOCATION_ARGUMENT_DESCRIPTION", null,
"STARTLEVEL_HELP_SETBSL", null,
"STARTLEVEL_HELP_SETIBSL", null,
"CONSOLE_HELP_PROFILE_HEADING", null,
"CONSOLE_HELP_PROFILELOG_DESCRIPTION", null,
"CONSOLE_HELP_UPDATE_COMMAND_DESCRIPTION", null,
"CONSOLE_NO_BUNDLE_SPECIFIED_ERROR", null,
"CONSOLE_NOTHING_TO_INSTALL_ERROR", null,
"CONSOLE_BUNDLE_ID_MESSAGE", null,
"CONSOLE_NO_INSTALLED_BUNDLES_ERROR", null,
"CONSOLE_REGISTERED_SERVICES_MESSAGE", null,
"CONSOLE_FRAMEWORK_IS_LAUNCHED_MESSAGE", null,
"CONSOLE_FRAMEWORK_IS_SHUTDOWN_MESSAGE", null,
"CONSOLE_ID", null,
"CONSOLE_BUNDLE_LOCATION_MESSAGE", null,
"CONSOLE_STATE_BUNDLE_FILE_NAME_HEADER", null,
"CONSOLE_BUNDLES_USING_SERVICE_MESSAGE", null,
"CONSOLE_NO_REGISTERED_SERVICES_MESSAGE", null,
"CONSOLE_NO_BUNDLES_USING_SERVICE_MESSAGE", null,
"CONSOLE_REGISTERED_BY_BUNDLE_MESSAGE", null,
"CONSOLE_IMPORTS_MESSAGE", null,
"CONSOLE_STALE_MESSAGE", null,
"CONSOLE_NO_EXPORTED_PACKAGES_NO_PACKAGE_ADMIN_MESSAGE", null,
"CONSOLE_NO_EXPORTED_PACKAGES_MESSAGE", null,
"CONSOLE_REMOVAL_PENDING_MESSAGE", null,
"CONSOLE_SERVICES_IN_USE_MESSAGE", null,
"CONSOLE_NO_SERVICES_IN_USE_MESSAGE", null,
"CONSOLE_ID_MESSAGE", null,
"CONSOLE_STATUS_MESSAGE", null,
"CONSOLE_DATA_ROOT_MESSAGE", null,
"CONSOLE_IMPORTED_PACKAGES_MESSAGE", null,
"CONSOLE_NO_IMPORTED_PACKAGES_MESSAGE", null,
"CONSOLE_HOST_MESSAGE", null,
"CONSOLE_EXPORTED_PACKAGES_MESSAGE", null,
"CONSOLE_EXPORTED_REMOVAL_PENDING_MESSAGE", null,
"CONSOLE_EXPORTED_MESSAGE", null,
"CONSOLE_NO_HOST_MESSAGE", null,
"CONSOLE_FRAGMENT_MESSAGE", null,
"CONSOLE_NO_FRAGMENT_MESSAGE", null,
"CONSOLE_NO_NAMED_CLASS_SPACES_MESSAGE", null,
"CONSOLE_NAMED_CLASS_SPACE_MESSAGE", null,
"CONSOLE_PROVIDED_MESSAGE", null,
"CONSOLE_REQUIRED_BUNDLES_MESSAGE", null,
"CONSOLE_NO_REQUIRED_BUNDLES_MESSAGE", null,
"CONSOLE_DEBUG_MESSAGE", null,
"CONSOLE_INFO_MESSAGE", null,
"CONSOLE_WARNING_MESSAGE", null,
"CONSOLE_ERROR_MESSAGE", null,
"CONSOLE_LOGSERVICE_NOT_REGISTERED_MESSAGE", null,
"CONSOLE_TOTAL_MEMORY_MESSAGE", null,
"CONSOLE_FREE_MEMORY_BEFORE_GARBAGE_COLLECTION_MESSAGE", null,
"CONSOLE_FREE_MEMORY_AFTER_GARBAGE_COLLECTION_MESSAGE", null,
"CONSOLE_MEMORY_GAINED_WITH_GARBAGE_COLLECTION_MESSAGE", null,
"CONSOLE_FRAMEWORK_LAUNCHED_PLEASE_SHUTDOWN_MESSAGE", null,
"CONSOLE_INVALID_BUNDLE_SPECIFICATION_ERROR", null,
"CONSOLE_CAN_NOT_REFRESH_NO_PACKAGE_ADMIN_ERROR", null,
"CONSOLE_NO_COMMAND_SPECIFIED_ERROR", null,
"CONSOLE_STARTED_IN_MESSAGE", null,
"CONSOLE_EXECUTED_RESULT_CODE_MESSAGE", null,
"CONSOLE_BUNDLE_HEADERS_TITLE", null,
"CONSOLE_SYSTEM_PROPERTIES_TITLE", null,
"CONSOLE_NO_PARAMETERS_SPECIFIED_TITLE", null,
"CONSOLE_SETTING_PROPERTIES_TITLE", null,
"CONSOLE_STATE_BUNDLE_TITLE", null,
"CONSOLE_THREADGROUP_TITLE", null,
"CONSOLE_THREADTYPE_TITLE", null,
"CONSOLE_REQUIRES_MESSAGE", null,
"CONSOLE_CAN_NOT_USE_STARTLEVEL_NO_STARTLEVEL_SVC_ERROR", null,
"CONSOLE_CANNOT_FIND_BUNDLE_ERROR", null,
"STARTLEVEL_FRAMEWORK_ACTIVE_STARTLEVEL", null,
"STARTLEVEL_BUNDLE_STARTLEVEL", null,
"STARTLEVEL_NO_STARTLEVEL_GIVEN", null,
"STARTLEVEL_NO_STARTLEVEL_OR_BUNDLE_GIVEN", null,
"STARTLEVEL_INITIAL_BUNDLE_STARTLEVEL", null,
"STARTLEVEL_POSITIVE_INTEGER", null);
{
org.eclipse.osgi.util.NLS.initializeMessages ("org.eclipse.osgi.framework.internal.core.ConsoleMessages", org.eclipse.osgi.framework.internal.core.ConsoleMsg);
}});
