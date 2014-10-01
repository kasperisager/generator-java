/**
 * Copyright (C) <%= new Date().getFullYear() %> <%= props.author %>.
 */<% if (props.namespace || props.package) { %>
package <% if (props.namespace) { %><%= props.namespace %><% } %><% if (props.package) { %><%= props.package %><% } %>;<% } %>

import static org.junit.Assert.*;
import org.junit.*;

/**
 * <%= _.humanize(props.name) %> class unit tests.
 *
 * @version 1.0.0
 */
<%= options.visibility %> class <%= _.classify(props.name) %>Test {
}
