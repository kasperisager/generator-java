/**
 * Copyright (C) <%= new Date().getFullYear() %> <%= props.author %>.
 */<% if (props.namespace || props.package) { %>
package <% if (props.namespace) { %><%= props.namespace %><% } %><% if (props.package) { %><%= props.package %><% } %>;<% } %>

/**
 * <%= _.humanize(props.name) %> interface.
 *
 * @version 1.0.0
 */
public interface <%= _.classify(props.name) %> {
}
