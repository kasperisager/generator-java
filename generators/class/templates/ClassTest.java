/**
 * Copyright (C) <%= new Date().getFullYear() %> <%= props.author %>.
 */<% if (props.namespace || props.package) { %>
package <% if (props.namespace) { %><%= props.namespace %><% } %><% if (props.package) { %><%= props.package %><% } %>;<% } %>

import org.junit.*;

/**
 * <%= _.humanize(props.name) %> class unit test.
 *
 * @version 1.0.0
 */
<%= options.visibility %> class <%= _.classify(props.name) %>Test {
}
