/**
 * Copyright (C) <%= new Date().getFullYear() %> <%= props.author %>.
 */
package <%= props.namespace %><% if (props.package) { %><%= props.package %><% } %>;

/**
 * <%= _.humanize(props.name) %> class unit tests.
 *
 * @version 1.0.0
 */
<%= options.visibility %> class <%= _.classify(props.name) %>Test {
}
